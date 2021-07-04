import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AppIcon } from '../../../assets/apps.svg';
import { ReactComponent as HomeLogo } from '../../../assets/home.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/settings.svg';

export const SideDrawer: FC = () => {
  const { t } = useTranslation();
  const navLinkClasses = 'flex items-center py-4 pl-6 w-full dark:text-gray-300 opacity-60';
  const navLinkActiveClasses = 'text-yellow-500 dark:text-yellow-500 opacity-100';

  return (
    <nav className='hidden md:inline-block content-container md:w-2/12 xl:w-2/12 px-2 pt-8 shadow-lg bg-white dark:bg-gray-800 transition-colors'>
      <NavLink to='/home' className={navLinkClasses} activeClassName={navLinkActiveClasses}>
        <HomeLogo className='inline-block w-8 h-8' />
        <div className='w-1/2 mx-3'>{t('navigation.home')}</div>
      </NavLink>
      <NavLink to='apps' className={navLinkClasses} activeClassName={navLinkActiveClasses}>
        <AppIcon className='inline-block w-8 h-8' />
        <div className='w-1/2 mx-3'>{t('navigation.apps')}</div>
      </NavLink>
      <NavLink to='settings' className={navLinkClasses} activeClassName={navLinkActiveClasses}>
        <SettingsIcon className='inline-block w-8 h-8' />
        <div className='w-1/2 mx-3'>{t('navigation.settings')}</div>
      </NavLink>
    </nav>
  );
};

export default SideDrawer;
