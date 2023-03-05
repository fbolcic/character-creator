import styles from "../components.module.css";
import { ReactComponent as GalleryIcon } from "./gallery.svg";

export function Image(props) {
  return (
    <div className={styles.imageWrapper}>
      {props.isSuccess ? (
        <img width={340} height="auto" src={props.imageUrl} alt="Character" />
      ) : (
        <div className={styles.imageContent}>
          <GalleryIcon />
          {props.isLoading ? (
            <div>Loading...</div>
          ) : props.isError ? (
            <div>Error trying to fetch image! try again.</div>
          ) : (
            <div>Describe a character and press 'Generate'</div>
          )}
        </div>
      )}
    </div>
  );
}
