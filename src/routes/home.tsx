import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import TimeLine from "../components/timeline";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <PostTweetForm />
      <TimeLine />
    </Wrapper>
  );
}
