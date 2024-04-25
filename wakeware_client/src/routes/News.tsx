import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/News.css"

function News() {
  
  //TODO: Add api interface
  const newsData = `The launch of WakeWare represents a significant step forward for Wake Forest in its commitment to fostering innovation and collaboration among its student body. By providing a dedicated platform for software projects, WakeWare empowers students to unleash their creativity, harness the power of teamwork, and make meaningful contributions to the world of technology. Students will be able to login with their Google accounts to upload links to their projects and post news updates on their progress.

A large motivator for creation of WakeWare is my experience of losing continuity on projects, disrupting their completion. WakeWare will serve as an archive for projects that students have created, allowing others to pick them up and continue working on them.`

  const paragraphs = newsData.split('\n')

  return (
    <div className="newsView">
      <div>
        <Header />
        <div className="newsTitle">

          <h2>WakeWare officially launched!</h2>
          <div className="metatext">
            <span>10 hours ago by Evan Zelt</span>
          </div>
        </div>
        <div className="newsBody">
          <div>
            {paragraphs.map(p => <p key={paragraphs.indexOf(p)}>{p}</p>)}
          </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default News
