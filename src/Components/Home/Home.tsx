import React from 'react';
import './Home.css';

import nazrulIslam from '../../assets/images/kaziNazrulIslam.png';
import wikipedia from '../../assets/images/wikipedia.png';
import youtube from '../../assets/images/youtube.png';
import amazon from '../../assets/images/amazon.png';
import star from '../../assets/images/star.png';

export default function Home() {
    const home:String = "Home"
    const about:String = "About"
    const achievements:String = "Achievements"
    const name: String = "Kazi Nazrul Islam"
    const bdPoet: String = "The national poet of Bangladesh";
    const rebelPoet: String = "Rebel Poet"
    const intro: String = "Kazi Nazrul Islam is the national poet of Bangladesh who is especially recognized as a Bidrohi Kobi (rebel poet) around the country. Nazrul is a famous poet, musicion and philosopher of Bangladesh. The famous poet Nazrul's writings deal with the revolution of that period of the British government. His revolutionary attempt helped him to be a national poet of Bangladesh. He has raised his voice against any kinds of fascism and oppression and got popularity swiftly around the Indian Subcontinent."
    const writer: String = "Awesome Writer"
    const writings: String = "Nazrul's writings explored themes such as love, freedom, humanity, and revolution. He opposed all forms of bigotry and fundamentalism, including religious, caste-based and gender-based. Throughout his career, Nazrul wrote short stories, novels, and essays but is best known for his songs and poems. He pioneered new music forms such as Bengali ghazals. Nazrul wrote and composed music for nearly 4,000 songs (many recorded on HMV and gramohone records), collectively known as Nazrul Geeti."
    const quoteOfNazrul: String = "Love has no meaning or amount."
    const learnMore:String = "Learn More";
    const videos:String = "Videos";
    const books:String = "Books";
    const awards:String = "Awards";
    const award1:String = "Jagattarini Gold Medal";
    const year1:String = "1945";
    const award1_desc:String = "From the University of Calcutta for his work in the Bengali Literature.";

    const award2:String = "Padma Bhushan";
    const year2:String = "1960";
    const award2_desc:String ="One of the highest civilian honors of the Republic of India.";

    const award3:String = "National Poet";
    const year3:String = "-";
    const award3_desc:String ="Conferred the title by the Government of Bangladesh.";

    const award4:String = "Ekushey Padak";
    const year4:String = "1976";
    const award4_desc:String ="Bangladesh's highest civilian honours.";

    const poetry:String = "Poetry";
    const poemsAndSongs:String = "Poems and Songs";

    const p1:String = "Agnibeena (The Fiery Lute), 1922";
    const p2:String = "Sanchita (Collected poems), 1925";
    const p3:String = "Phanimanasa (The Cactus), 1927";
    const p4:String = "Chakrabak (The Flamingo), 1929";
    const p5:String = "Satbhai Champa (The Seven Brothers of Champa), juvenile poems, 1933";
    const p6:String = "Nirjhar (Fountain), 1939";
    const p7:String = "Natun Chand (The New Moon), 1939";
    const p8:String = "Morubhaskar (The Sun in the Desert), 1951";
    const p9:String = "Sanchayan (Collected Poems), 1955";
    const p10:String = "Nazrul Islam: Islami Kobita (A Collection of Islamic Poems; Dhaka, Bangladesh: Islamic Foundation, 1982)";


    const s1:String = "Dolan Chapa (name of a faintly fragrant monsoon flower), 1923";
    const s2:String = "Bisher Bashi (The Poison Flute), 1924";
    const s3:String = "Bhangar Gan (The Song of Destruction), 1924 proscribe in 1924";
    const s4:String = "Chhayanat (The Raga of Chhayanat), 1925";
    const s5:String = "Chittanama (On Chittaranjan), 1925";
    const s6:String = "Samyabadi (The Proclaimer of Equality), 1926";
    const s7:String = "Puber Hawa (The Eastern Wind), 1926";
    const s8:String = "Sarbahara (The Proletariat), 1926";
    const s9:String = "Sindhu Hindol (The Undulation of the Sea), 1927";
    const s10:String = "Jinjir (Chain), 1928";
    const s11:String = "Pralaya Shikha (Doomsday Flame), 1930 proscribed in 1930";
    const s12:String = "Shesh Saogat (The Last Offerings), 1958";

    const f1:String = "About the author";
    const f2:String ="Techs Used";
    const f3:String ="Content Disclaimer";

    const f1p1p1:String ="Made by ";
    const f1p1p2:String ="Md.Abu Taher";
    const f1p1p3:String ="for a Freecodecamp tribute challenge.";
    const f2p1:String ="Sementic UI";
    const f3p1:String ="The content of this website is mostly copied from Wikipedia, BiographyHD, Thetamousepeople. Original credits goes to the respective authors.";



    return <div>
        <div className='mainDiv'>
            <nav>
                <ul>
                    <li><a href="#">{home}</a></li>
                    <li><a href="#about">{about}</a></li>
                    <li><a href="#achievements">{achievements}</a></li>
                </ul>
            </nav>

            <div className='welcomeDiv'>
                <h1>{name}</h1>
                <p>{bdPoet}</p>
            </div>
        </div>
        {/* -------------------------------------------END-------------------------------------------------------- */}
        <div className='aboutDiv' id="about">
            <div className='aboutPoet'>
                <div className='section1'>
                    <div className='content1'>
                        <h2>{rebelPoet}</h2>
                        <p>{intro}</p>
                    </div>
                    <br />
                    <br />
                    <div className='content2'>
                        <h2>{writer}</h2>
                        <p>{writings}</p>
                    </div>
                </div>
                <div className='section2'>
                    <img src={nazrulIslam} alt="kazi" />
                    {/* <h1>hello</h1> */}
                </div>
            </div>

            <div className='knowmoreDiv'>
                <a href=""><img src={wikipedia} alt="" />&nbsp;{learnMore}</a>&nbsp;
                {/* <a href=""> Learn More</a>{' '} */}
                <a href=""><img src={youtube} alt="" />&nbsp;{videos}</a> &nbsp;
                <a href=""><img src={amazon} alt="" />&nbsp;{books}</a>
            </div>

            <div className='quoteDiv'>
                <p><q>{quoteOfNazrul}</q> - {name}</p>
            </div>
        </div>
        {/* -------------------------------------------END-------------------------------------------------------- */}


        <div className='awardsTitleDesign' id="achievements">
            <div><hr /></div>
            <div><img src={star} alt="" id="star" /></div>
            <h2 id='awardsHeading'>{awards}</h2>
            <div><hr /></div>
        </div>

        <div className='awards'>
            <div>
                <h3>{award1}</h3>
                <p className='year'>{year1}</p>
                <p>{award1_desc}</p>
            </div>

            <div>
                <h3>{award2}</h3>
                <p className='year'>{year2}</p>
                <p>{award2_desc}</p>
            </div>
            <div>
                <h3>{award3}</h3>
                <p className='year'>{year3}</p>
                <p>{award3_desc}</p>
            </div>
            <div>
                <h3>{award4}</h3>
                <p className='year'>{year4}</p>
                <p>{award4_desc}</p>
            </div>
        </div>


        <div className='writingsOfNazrul'>
            <div className='poetry'>
                {/* <h2>Poetry</h2> */}

                <div className='poetryHeading'>
                    <div><hr /></div>
                    <h2>{poetry}</h2>
                    <div><hr /></div>
                </div>

                <ul>
                    <li>{p1}</li>
                    <li>{p2}</li>
                    <li>{p3}</li>
                    <li>{p4}</li>
                    <li>{p5}</li>
                    <li>{p6}</li>
                    <li>{p7}</li>
                    <li>{p8}</li>
                    <li>{p9}</li>
                    <li>{p10}</li>
                </ul>
            </div>
            <div className='poemsAndSongs'>
                {/* <h2>Poems and Songs</h2> */}

                <div className='poemsAndSongsHeading'>
                    <div><hr /></div>
                    <h2>{poemsAndSongs}</h2>
                    <div><hr /></div>
                </div>

                <ul>
                    <li>{s1}</li>
                    <li>{s2}</li>
                    <li>{s3}</li>
                    <li>{s4}</li>
                    <li>{s5}</li>
                    <li>{s6}</li>
                    <li>{s7}</li>
                    <li>{s8}</li>
                    <li>{s9}</li>
                    <li>{s10}</li>
                    <li>{s11}</li>
                    <li>{s12}</li>
                </ul>
            </div>
        </div>



        <div className='footerDiv'>
            <footer>
                <div>
                    <h5>{f1}</h5>
                    <p>{f1p1p1}<span>{f1p1p2}</span> {f1p1p3}</p>
                </div>
                <div>
                    <h5>{f2}</h5>
                    <p><span>{f2p1}</span></p>
                </div>
                <div>
                    <h5>{f3}</h5>
                    <p>{f3p1}</p>
                    {/* <p>The content of this website is mostly copied from <a href="">Wikipedia</a>, <a href="">BiographyHD</a>,
                        <a href="">Thetamousepeople</a>. Original credits goes to the respective authors.</p> */}
                </div>
            </footer>
        </div>
    </div>
}
