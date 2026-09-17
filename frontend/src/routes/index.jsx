import { createFileRoute } from "@tanstack/react-router";

import { AuthModal } from "@/components/bluelock/AuthModal";
import { Gacha } from "@/components/bluelock/Gacha";
import { Hero } from "@/components/bluelock/Hero";
import { JogadoresDestaque } from "@/components/bluelock/JogadoresDestaque";
import { MonteSeuTime } from "@/components/bluelock/MonteSeuTime";
import { Navbar } from "@/components/bluelock/Navbar";
import { NewGens } from "@/components/bluelock/NewGens";
import { Projeto } from "@/components/bluelock/Projeto";
import { AuthProvider } from "@/context/AuthContext";
import { BlueLockProvider } from "@/context/BlueLockContext";

import "@/styles/inicial.scss";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projeto Blue Lock — Monte seu time e role por jogadores" },
      {
        name: "description",
        content:
          "Site do Projeto Blue Lock: conheça o projeto, os New Gens, role a roleta de diamantes brutos e monte sua escalação ideal.",
      },
      { property: "og:title", content: "Projeto Blue Lock — Monte seu time" },
      {
        property: "og:description",
        content:
          "Role por jogadores, colecione seu elenco e monte a escalação mais egoísta do Blue Lock.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <AuthProvider>
      <BlueLockProvider>
        <Navbar />
        <Hero />
        <hr />
        <Projeto />
        <hr />
        <JogadoresDestaque />
        <hr />
        <NewGens />
        <hr />
        <MonteSeuTime />
        <hr />
        <Gacha />
        <AuthModal />
      </BlueLockProvider>
    </AuthProvider>
  );
}
