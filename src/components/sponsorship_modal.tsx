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
      size='35vw'
      withCloseButton={false}
      radius={15}
      padding={0}
    >
        <div className='flex items-center justify-start w-[35vw] min-h-[40vh]'>
          <div className='flex flex-col w-[35vw] h-[40vh]'>
            <div className='p-12 bg-[#F58326] rounded-t-[15px]'>
              <h3 className='text-2xl font-bold text-white'>Make a Bank Transfer</h3>
            </div>
            <div className='flex gap-4 p-12'>
              <div className="cursor-pointer bg-fidelity h-[100px] w-[100px] bg-cover" />
              <div>
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