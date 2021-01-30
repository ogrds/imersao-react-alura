import styled from "styled-components";
import Widget from "../Widget";
import OptionQuiz from "../OptionQuiz";
import ButtonQuestion from "../ButtonQuestion";
import Image from "../Image";
import CorrectQuestion from "../CorrectQuestion";
import WrongQuestion from "../WrongQuestion";

export const SmallText = styled.small`
  color: #fefefe8a;
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #ffffff26;
  width: 50px;
  position: absolute;
`;

export default function QuizContent({
  question,
  questionIndex,
  total_questions,
  alternatives,
  onSubmit,
  onChange,
  isSelectedOption,
  showCorrect,
  showWrong,
}) {
  return (
    <Widget>
      <Widget.Header>
        <h2>{`Pergunta ${questionIndex + 1} de ${total_questions}`}</h2>
      </Widget.Header>
      <Image src={question.image} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <SmallText>{question.description}</SmallText>
        <Hr />
        <form
          onSubmit={(infos) => {
            infos.preventDefault();
            onSubmit();
          }}
        >
          <ul>
            <li>
              {alternatives.map((item, key) => {
                return (
                  <OptionQuiz
                    onChange={(infos) => {
                      onChange(infos);
                    }}
                    key={key}
                    content={item}
                    number={key + 1}
                  />
                );
              })}
            </li>
          </ul>
          {showCorrect && <CorrectQuestion />}
          {showWrong && <WrongQuestion />}
          <ButtonQuestion disabled={!isSelectedOption}>
            Confirmar
          </ButtonQuestion>
        </form>
      </Widget.Content>
    </Widget>
  );
}
