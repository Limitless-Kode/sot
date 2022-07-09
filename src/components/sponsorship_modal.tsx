import { Modal } from '@mantine/core'
import React, {useState} from 'react'
import {FiCopy, FiCheck} from 'react-icons/fi'

type IContactUsModal = {
  opened: boolean,
  onClose: Function
}
function SponsorshipModal(props: IContactUsModal) {
  const { opened, onClose } = props;
  const [ isCopied, setIsCopied ] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }
  const copy = () => {
    copyTextToClipboard('1400191801415')
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Modal
      centered
      opened={opened}
      onClose={() => onClose()}
      size='sm'
      withCloseButton={false}
      radius={15}
      padding={0}
    >
        <div className='flex items-center justify-start w-full min-h-[30vh]'>
          <div className='flex flex-col w-full h-[30vh]'>
            <div className='p-6 bg-[#F58326] rounded-t-[15px]'>
              <h3 className='text-xl md:text-2xl font-bold text-white'>Make a Bank Transfer</h3>
            </div>
            <div className='flex gap-4 p-6 md:p-8'>
              <div className="cursor-pointer bg-fidelity h-[60px] w-[60px] md:h-[100px] md:w-[100px] bg-cover" />
              <div className=''>
                <p className='text-md'>Abraham Agoni</p>
                <div className='flex gap-6 items-center justify-start text-[#F58326]'>
                  <p className='text-black'> { isCopied ? 'Copied!' : '1400191801415'}</p>
                  {
                    isCopied ? <FiCheck size={18}/> :
                    <FiCopy onClick={copy} size={18} className='cursor-pointer' title='Copy to Clipboard'/>
                  }
                </div>
                <p>Fidelity Bank</p>
                <p>Haatso</p>
              </div>
              </div>
            </div>
        </div>
      </Modal>
  )
}

export default SponsorshipModal