import PostsForm from "@/infrastructure/view/my-post/src/components/Post";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.App}>
      <PostsForm />
    </div>
  );
}
