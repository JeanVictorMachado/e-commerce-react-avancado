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
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
  mostPopularGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  newGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighligth: HighlightProps
  upcomingMoreGames: GameCardProps[]
}

const Home = ({
  banners,
  freeGames,
  freeHighligth,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcomingGames,
  upcomingHighligth,
  upcomingMoreGames
}: HomeScreenProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcomingGames} />
      <Showcase highlight={upcomingHighligth} games={upcomingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Free games" highlight={freeHighligth} games={freeGames} />
  </Base>
)

export default Home
