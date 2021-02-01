import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import InputText from "../src/components/InputText";
import Button from "../src/components/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

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

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form
              onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <InputText
                onChange={(infosDoEvento) => {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite seu nome para continuar."
              />
              <Button
                content="Iniciar"
                disabled={name.length === 0}
                type="submit"
              />
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1 style={{ marginBottom: "10px" }}>Quizes da Galera</h1>
            {db.external.map((item, key) => {
              const [project, user] = item
                .replace(/\//g, "")
                .replace("https:", "")
                .replace(".vercel.app", "")
                .split(".");
              return (
                <Widget.Topic key={key} href={`/quiz/${project}?name=${user}`}>{`${user}/${project}`}</Widget.Topic>
              );
            })}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ogrds" />
    </QuizBackground>
  );
}
