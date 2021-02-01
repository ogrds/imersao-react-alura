import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import ButtonQuestion from "../src/components/ButtonQuestion";
import QuizContent from "../src/components/QuizContent";

import Link from "next/link";
import Spinner from "../src/components/Spinner";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Quiz() {
  const INITIAL = {
    reset: false,
    screenState: "LOADING",
    selectedOption: 0,
    acertos: 0,
    currentQuestion: 0,
  };

  const [showCorrect, setShowCorrect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [isSelectedOption, setIsSelectedOption] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [reset, setReset] = useState(INITIAL.reset);
  const [screenState, setScreenState] = useState(INITIAL.screenState);
  const [selectedOption, setSelectedOption] = useState(INITIAL.selectedOption);
  const [acertos, setAcertos] = useState(INITIAL.acertos);
  const total_questions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(
    INITIAL.currentQuestion
  );
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const alternatives = question.alternatives;
  const answer = question.answer;

  const generateNumberRandom = () =>
    setRandomNumber(Math.floor(Math.random() * 1000));

  useEffect(() => {
    generateNumberRandom();
    setTimeout(() => {
      setReset(false);
      setScreenState("QUIZ");
    }, 1 * 1000);
  }, [reset]);

  const handleSubmit = () => {
    setIsSelectedOption(false);
    generateNumberRandom();

    if (selectedOption === answer) {
      setAcertos(acertos + 1);
      setShowCorrect(true);
      setTimeout(() => {
        setShowCorrect(false);
      }, 2000);
    } else {
      setShowWrong(true);
      setTimeout(() => {
        setShowWrong(false);
      }, 2000);
    }

    setTimeout(() => {
      const nextQuestion = questionIndex + 1;
      if (nextQuestion < total_questions) {
        setCurrentQuestion(questionIndex + 1);
      } else {
        setScreenState("FINISH");
      }
    }, 2000);
  };

  const handleChange = (e) => {
    setIsSelectedOption(true);
    const selected = e.target.value - 1;
    setSelectedOption(selected);
  };

  const handleClickReset = () => {
    setReset(true);
    setScreenState(INITIAL.screenState);
    setSelectedOption(INITIAL.selectedOption);
    setAcertos(INITIAL.acertos);
    setCurrentQuestion(INITIAL.currentQuestion);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === "LOADING" && (
          <Widget>
            <Widget.Header>Carregando...</Widget.Header>
            <Widget.Content style={{ textAlign: "center" }}>
              <Spinner />
            </Widget.Content>
          </Widget>
        )}
        {screenState === "QUIZ" && (
          <QuizContent
            key={randomNumber}
            isSelectedOption={isSelectedOption}
            question={question}
            questionIndex={questionIndex}
            total_questions={total_questions}
            alternatives={alternatives}
            onSubmit={handleSubmit}
            onChange={handleChange}
            showCorrect={showCorrect}
            showWrong={showWrong}
          />
        )}
        {screenState === "FINISH" && (
          <Widget>
            <Widget.Header>{`PONTUAÇÂO FINAL:`}</Widget.Header>
            <Widget.Result>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row",
                  alignItems: "end",
                }}
              >
                <img
                  style={{ width: "60px", height: "60px" }}
                  src={
                    acertos <= 2
                      ? "/svg/emojiCrying.svg"
                      : acertos > 2 && acertos < 5
                      ? "/svg/emojiGrinningSwet.svg"
                      : "/svg/emojiPartying.svg"
                  }
                  alt="emoji"
                />
                <div>
                  <h4
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >{`Você acertou ${acertos} de ${total_questions}`}</h4>
                  <p style={{ marginTop: ".5rem" }}>
                    {acertos <= 2
                      ? "Você precisa assistir mais!"
                      : acertos > 2 && acertos < 5
                      ? "Opa, quase lá!"
                      : "Sensacional!"}
                  </p>
                </div>
              </div>
            </Widget.Result>
            <hr
              style={{
                width: "50%",
                borderColor: "#606060",
                boxShadow: "0 0 1px #8d8d8d",
              }}
            />
            <Widget.Options>
              <ButtonQuestion.Reset
                onClick={handleClickReset}
                title="Jogar Novamente"
              >
                <FontAwesomeIcon icon={faRedoAlt} />
              </ButtonQuestion.Reset>
              <Link href="/">
                <ButtonQuestion.Reset title="Sair">
                  <FontAwesomeIcon icon={faDoorOpen} />
                </ButtonQuestion.Reset>
              </Link>
            </Widget.Options>
          </Widget>
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ogrds" />
    </QuizBackground>
  );
}
