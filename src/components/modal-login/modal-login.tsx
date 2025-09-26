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
      style={{ width: '50vw' }}
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
          <Register
            onClose={() => {
              onClose();
              setTabIndex(0);
            }}
          />
        </TabPanel>
      </TabView>
    </Dialog>
  );
};
