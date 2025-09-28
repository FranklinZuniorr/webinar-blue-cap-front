import { Dialog } from 'primereact/dialog';
import { TabPanel, TabView } from 'primereact/tabview';
import { Login } from './components/login';
import { Register } from './components/register';
import { useState } from 'react';

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLogin = ({ isOpen, onClose }: ModalLoginProps) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <Dialog
      header="Login e registro"
      visible={isOpen}
      className="w-[50rem] max-md:w-[95%]"
      onHide={onClose}
    >
      <TabView
        activeIndex={tabIndex}
        onTabChange={(event) => setTabIndex(event.index)}
      >
        <TabPanel header="Login">
          <Login onClose={onClose} />
        </TabPanel>
        <TabPanel header="Criar conta">
          <Register onClose={() => setTabIndex(0)} />
        </TabPanel>
      </TabView>
    </Dialog>
  );
};
