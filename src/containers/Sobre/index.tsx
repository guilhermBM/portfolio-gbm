import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus velit,
      reprehenderit doloribus alias deleniti voluptates numquam, pariatur
      eligendi repellendus ad dignissimos odio dolorem aliquam praesentium
      voluptatibus, nobis quam harum. Sequi!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=guilhermBM&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=guilhermBM&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
