import React from "react";
import config from "../config.json";
import styled  from "styled-components";
import { CSSReset } from "../source/components/CSSReset";
import Menu from "../source/components/Menu/components";
import { StyledTimeline } from "../source/components/Timeline";

function HomePage() {
    const estilosHomePage = {backgroundColor: "white"}

    const [valorDoFiltro, setvalDoFiltro] = React.useState(""); // Ajuda para re-executar uma função

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setvalDoFiltro={setvalDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteudo
                </Timeline>
            </div>
        </>
    )
}
export default HomePage


const StyledHeader = styled.div`
    .profile {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .banner {
        width: 99%;
        height: 50%;
        object-fit: cover;
    }
`;

const StyledBanner = styled.img`
    content: url(${config.bg});
    width: 99%;
    height: 50%;
    object-fit: cover;
`;
function Header() {
    return (
        <StyledHeader>
            <StyledBanner ></StyledBanner>
            <selection className="user-info">
                <img src={`https://github.com/${config.github}.png`} className="profile"></img>

                <div>
                    <h2>
                        {config.name}
                    </h2>

                    <p>
                        {config.job}
                    </p>
                </div>
            </selection>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...props}) {
    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();

                                return titleNormalized.includes(searchValue)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )   
}