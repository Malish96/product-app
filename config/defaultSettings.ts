import { Settings as LayoutSettings } from '@ant-design/pro-components';
import { getMetaData } from '@/services/BaseService';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#e6f7ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  pwa: false,
  logo: '',
  iconfontUrl: '',
};

export default Settings;
