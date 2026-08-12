import styles from "./HomeHero.module.css";
import ActionLink from "../../../components/actions/ActionLink.tsx";
import home_hero_image from "../../../assets/images/placeholders/home-hero-image.png";

export default function HomeHero() {
    return (
        <section className={`${styles.hero}`}>
            <div className={`${styles.content}`}>
                <p className={`text-eyebrow ${styles.eyebrow}`}>1 Corinthians 3:11</p>
                <h1 className={`text-page-title ${styles.title}`}>Jesus Christ, our foundation.</h1>
                <p className={`text-lead`}>Faithful, understandable teaching for those seeking Christ and believers
                    growing in him.</p>
                <ActionLink href="/visit">Plan your visit</ActionLink>
            </div>

            <div className={`${styles.media}`}>
                <img src={home_hero_image} className={`${styles.image}`}/>
            </div>
        </section>
    )
}