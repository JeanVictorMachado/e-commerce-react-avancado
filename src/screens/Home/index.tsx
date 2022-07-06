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
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
}

const Home = ({
  banners,
  freeGames,
  freeHighligth,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames
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
      <Showcase title="Upcomming" games={upcommingGames} />
      <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Free games" highlight={freeHighligth} games={freeGames} />
  </Base>
)

export default Home
