import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'

import Showcase from 'components/Showcase'
import BannerSlider from 'components/BannerSlider'
import Base from 'components/Base'

import * as S from './styles'

export type HomeScreenProps = {
  banners: BannerProps[]
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
  mostPopularGamesTitle: string
  mostPopularGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  newGamesTitle: string
  newGames: GameCardProps[]
  upcomingGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighligth: HighlightProps
}

const Home = ({
  banners,
  freeGamesTitle,
  freeGames,
  freeHighligth,
  mostPopularGamesTitle,
  mostPopularGames,
  mostPopularHighlight,
  newGamesTitle,
  newGames,
  upcomingGamesTitle,
  upcomingGames,
  upcomingHighligth
}: HomeScreenProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighligth}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighligth}
      games={freeGames}
    />
  </Base>
)

export default Home
