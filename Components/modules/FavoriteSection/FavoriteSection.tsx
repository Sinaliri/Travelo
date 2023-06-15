import styles from './FavoriteSection.module.scss'
import Notif from '../Notif/Notif'
import FavoriteCard from './FavoriteCard/FavoriteCard'

const FavoriteSection = () => {
  return (
    <div>
        <div
        className={`${styles.FavoriteSectionHeader} flex justify-content-between align-items-center`}
      >
        <h2>Favorite</h2>
        <Notif />
      </div>
      <div className={`${styles.favoriteTrips} grid`}>
        <FavoriteCard/>
        <FavoriteCard/>
        <FavoriteCard/>

      </div>
    </div>
  )
}

export default FavoriteSection