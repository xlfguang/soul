import {
  ContaineText,
  ContaineTextBox,
  ContaineTitle,
  ContainerBox,
  ContainerItem,
  ImageCover,
} from "@/style";
interface ContainerProps {
  type: string;
  imgSrc: string;
  title: string;
  content: string;
}
function Container(props: ContainerProps) {
  return (
    <ContainerBox>
      <ContainerItem type={props.type}>
        <ImageCover imgurl={props.imgSrc} />
        <ContaineTextBox>
          <ContaineTitle>{props.title}</ContaineTitle>
          <ContaineText>{props.content}</ContaineText>
        </ContaineTextBox>
      </ContainerItem>
    </ContainerBox>
  );
}

export default Container;
