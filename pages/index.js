import config from "../config.json";
import styled  from "styled-components";
import { CSSReset } from "../source/components/CSSReset";
import Menu from "../source/components/Menu";
import { StyledTimeline } from "../source/components/Timeline";

function HomePage() {
    const estilosHomePage = {backgroundColor: "white"}
    
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
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
function Header() {
    return (
        <StyledHeader>
            <img src="https://images.unsplash.com/photo-1560415755-bd80d06eda60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=991&q=80" className="banner"></img>
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

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
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