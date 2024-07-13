import React from 'react'
import { AccountBar } from './main-content-components/AccountBar';
import { RecentPlays } from './main-content-components/RecentPlays';
import { Trending } from './main-content-components/Trending';
import MostListenedArtists from './main-content-components/MostListenedArtists';
import RelatedArtists from './main-content-components/RelatedArtists';
import UserPlaylist from './main-content-components/UserPlaylist';


export const MainContent = () => {





    return (
        // In the div below if i remove flex-wrap the sidebar and the main content will overlap

        <div id="main_content_wrapper" className='flex-1 relative over p-5 flex flex-col gap-14 overflow-hidden md:p-10'>
            <AccountBar />
            <RecentPlays />

            <Trending />


            <MostListenedArtists />
            <RelatedArtists />
            <UserPlaylist />

        </div>
    )
}

export default MainContent
