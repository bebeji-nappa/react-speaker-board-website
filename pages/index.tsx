import { NextPage } from 'next'
import { ReactSpeakerBoard } from "react-speaker-board"
import { Slide } from "../slide/Slide"

const Home: NextPage = () => {
  return <ReactSpeakerBoard slide={Slide} mode="slide" />
}

export default Home
