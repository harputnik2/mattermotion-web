import styles from './VirtualTour.module.scss'


type Props = {
  tour: string;
}
export const VirtualTour = ({tour}: Props) => {
  console.log(tour)
  return (
    <div className={styles.virtualTour}>
      <iframe
        width='1600'
        height='760'
        src={tour}
        frameBorder={0}
        allowFullScreen
      />
    </div>
  )
}