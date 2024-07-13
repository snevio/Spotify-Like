
import ArtistCard from '../../CustomCards/ArtistCard'

const ArtistRelated = ({ relatedArtists }) => {

    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl'>Artist you may like</h1>
            <div id="similar_artists" className='flex gap-3 overflow-auto '>
                {relatedArtists.artists.map((artist, index) => {

                    return (
                        <ArtistCard artistImage={artist.images[1]?.url} artistName={artist.name} artistId={artist.id} key={artist.name} />
                    )

                })}
            </div>
        </div >
    )
}

export default ArtistRelated

