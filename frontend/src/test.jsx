import tw from "twin.macro";
import styled from "styled-components";

const Test = () => {
  return (
    <Wrapper>
      <p>Test</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`flex flex-col gap-4 p-5 bg-black`}

  p {
    ${tw`text-yellow-300 w-52 p-4 cursor-pointer mx-auto text-center bg-blue-500 hover:(scale-110 text-cyan-300 bg-green-400) transition-transform ease-in-out `}
  }
`;

export default Test;
