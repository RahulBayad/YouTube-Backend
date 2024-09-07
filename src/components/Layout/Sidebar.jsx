import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarLinks } from './layoutFunctions.jsx';
import { GoChevronRight } from "react-icons/go";
import { CoursesIcon, FashionIcon, FilmsIcon, GamingIcon, HistoryIcon, HomeIcon, LikeIcon, LiveIcon, 
        MusicIcon, NewsIcon, PlaylistIcon, PodcastsIcon, ShoppingIcon, ShortsIcon, SportsIcon, SubscriptionIcon, 
        TrendingIcon, WatchLaterIcon, YourChannelIcon, YourVideosIcon
} from '../../assets/icons.jsx';

const Sidebar = () => {
  return (
    <aside className='border-r border-gray-200 p-3 text-[13px] h-[calc(100vh-50px)] overflow-y-scroll sm:flex flex-col  hidden '>
        <SidebarLinks icon={HomeIcon} label="Home" class="w-[22px] "/>
        <SidebarLinks icon={ShortsIcon} label="Shorts" class="w-[22px]" />
        <SidebarLinks icon={SubscriptionIcon} label="Subscriptions" class="w-[21px]" />

        <hr className='mt-[11px] mb-[11px]'/>
        <NavLink className='py-2 px-2 text-sm font-medium lg:flex hidden items-center rounded hover:bg-gray-100 hover:shadow-sm cursor-pointer'>
            <span>You</span>&nbsp;&nbsp;
            <GoChevronRight size="15"/>
        </NavLink>

        <SidebarLinks icon={YourChannelIcon} label="Your channel" class="w-[22px]"/>
        <SidebarLinks icon={HistoryIcon} label="History" class="w-[22px]"/>
        <SidebarLinks icon={PlaylistIcon} label="Playlists" class="w-[21px]"/>
        <SidebarLinks icon={YourVideosIcon} label="Your videos" class="w-[22px]"/>
        <SidebarLinks icon={WatchLaterIcon} label="Watch Later" class="w-[22px]"/>
        <SidebarLinks icon={LikeIcon} label="Liked videos" class="w-[22px]"/>

        <hr className='mt-[11px] mb-[11px]'/>
        <span className='py-2 px-2 text-sm font-medium lg:block hidden items-center rounded'>
          Explore
        </span>

        <SidebarLinks icon={TrendingIcon} label="Trending" class="w-[22px]"/>
        <SidebarLinks icon={ShoppingIcon} label="Shopping" class="w-[22px]"/>
        <SidebarLinks icon={MusicIcon} label="Music" class="w-[22px]"/>
        <SidebarLinks icon={FilmsIcon} label="Films" class="w-[22px]"/>
        <SidebarLinks icon={LiveIcon} label="Live" class="w-[22px]"/>
        <SidebarLinks icon={GamingIcon} label="Gaming" class="w-[22px]"/>
        <SidebarLinks icon={NewsIcon} label="News" class="w-[22px]"/>
        <SidebarLinks icon={SportsIcon} label="Sport" class="w-[22px]"/>
        <SidebarLinks icon={CoursesIcon} label="Courses" class="w-[22px]" />
        <SidebarLinks icon={FashionIcon} label="Fashion & Beauty" class="w-[22px]"/>
        <SidebarLinks icon={PodcastsIcon} label="Podcasts" class="w-[22px]"/>

    </aside>
    
  )
}
export default Sidebar;
