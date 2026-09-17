
import workIcon from '../images/icon-work.svg';
import playIcon from '../images/icon-play.svg';
import studyIcon from '../images/icon-study.svg';
import exerciseIcon from '../images/icon-exercise.svg';
import socialIcon from '../images/icon-social.svg';
import selfCareIcon from '../images/icon-self-care.svg';
import ellipsisIcon from '../images/icon-ellipsis.svg';

let images = [
    workIcon,
    playIcon,
    studyIcon,
    exerciseIcon,
    socialIcon,
    selfCareIcon,
]

function Databox(props) {
    return (
        <div className="bgimg" style={{ backgroundColor: props.color }}>
            <img src={images[props.index]} alt="bgimg" />
            <div className="box">
                <section className="head">
                    <span>{props.title}</span>
                    <img src={ellipsisIcon} alt="three-dot" width="40px" />
                </section>
                <section className="bottom">
                <p className='current'>{props.current}hrs</p>
                <span className='previous'>Last {props.text} - {props.previous}hrs</span>
                </section>
            </div>
        </div>
    )
}
export default Databox