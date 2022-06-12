import styled from "styled-components"

export const AuthorStyle = styled.div`
width: 100%;
margin-bottom: 20px;
padding: 30px 0;
display: flex;
flex-wrap: wrap;
color: var(--shade-9);
.btn-p{
  width: fit-content;
 margin-top: auto;
 margin-bottom: 5px;
 @media (max-width: 956px) {
margin: auto auto 5px auto;
}
}
`
AuthorStyle.Img = styled.div`
width: 100%;
margin-right: 1.65%;
display: flex;
justify-content: center;
.tm-img-responsive{
    width: 70% !important;
    height: auto !important;
    max-height: 500px !important;
    object-fit: cover !important;
}
 
`
export const Artecle = styled.article`
  padding: 50px 40px 0 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &> h2{
    margin-bottom: 40px;
    color: var(--shade-9);
  }
  &> p{
    color: var(--shade-9);
  }
  @media (max-width: 956px) {
        padding: 50px 0 0 0;
        text-align: center;
    }
  
`