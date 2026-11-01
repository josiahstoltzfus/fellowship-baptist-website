import styles from "./MeetThePastor.module.css";
import PageIntroduction from "../../components/content/PageIntroduction/PageIntroduction.tsx";
import ImageTextSection from "../../components/content/ImageTextSection/ImageTextSection.tsx";
import PageConclusion from "../../components/content/PageConclusion/PageConclusion.tsx";
import TextSection from "../../components/content/TextSection/TextSection.tsx";
import pastor_image from "../../assets/images/pastor-image.jpg"

export default function MeetThePastorPage() {
    return (
        <>
            <PageIntroduction
                eyebrow="About Fellowship"
                title="Meet the pastor."
                spacing="connected"
            />

            <ImageTextSection
                eyebrow="Pastor of Fellowship Baptist"
                heading="Pastor Jack Boyer"
                imageAlt="Pastor Jack Boyer of Fellowship Baptist Church"
                imageSrc={pastor_image}
                imagePosition="left">
                <p className="text-prose">I would like to share my story to help you know me. My selfishness and sin choices were destroying my life and my marriage with a very sweet wife. She told my sister, “I don’t know what I am going to do with him."</p>
                <p className="text-prose">My sister sent her Pastor to visit us. I tried to get rid of him, but my wife had questions. God kept the pressure on, and I finally admitted I was lost and needed to be saved. I got a second chance. Really it was my last chance.</p>
                <p className="text-prose">Patty and I both received Jesus as our personal Savior and it surprised everyone, including me, when eight years later God called me to preach.</p>
                <p className="text-prose">So, when I say, we need Jesus and the truths of God’s Word to make life work, I know firsthand what that looks like. That is my ministry.</p>
            </ImageTextSection>

            <TextSection
                eyebrow="A Word of Welcome"
                heading="The Lord Jesus Christ is a wonderful Savior!"
                description="He desires to have the place in your life that He died on the Cross to give you. No one can do more than the Lord Jesus Christ to save, help, guide and bless our lives. We need Jesus and we need the principles found in God’s Word, that our Church shares each week."
                surface="reflective">
                <div className={styles.closing}>
                    <p className={`text-subheading ${styles.invitation}`}>Come and see!</p>
                    <p className={`text-eyebrow ${styles.signature}`}>Pastor Jack Boyer</p>
                </div>
            </TextSection>

            <PageConclusion
                eyebrow="continue"
                heading="Hear the teaching of God's Word."
                description="Become familiar with the pastor's ministry through sermons and teaching from Fellowship Baptist."
                href="/resources/sermons"
                actionLabel="Explore Sermons"/>
        </>
    )
}