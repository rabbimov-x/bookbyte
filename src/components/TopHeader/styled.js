import styled from "styled-components"


export const TopStyle = styled.div`
width: 100%;
overflow-x: hidden;
background: url(Feather.png), linear-gradient(225deg, #192038 0%, #2E3A59 100%);

.logotype{
    width: 16.47%;
    height: fit-content;
    img{
        width: 100%;
        height: auto;
    }
}
@media (min-width: 1500px) {
    .cards{
        width: 17%;
    }
}
@media (max-width: 992px) {
    .cards{
        width: 27%;
    }
}
@media (max-width: 767px) {
    .cards{
        display: none;
    }
}


`