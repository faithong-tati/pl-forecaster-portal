import type { SidebarProviderState } from '@/modules/templates/providers/sidebar-provider/types';
import type { Updater } from 'use-immer';

export interface ISidebarContext {
  setState: Updater<SidebarProviderState>;
  state: SidebarProviderState;
}
