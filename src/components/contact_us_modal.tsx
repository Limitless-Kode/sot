import { Modal } from '@mantine/core'
import React from 'react'

type IContactUsModal = {
  opened: boolean,
  onClose: Function
}
function ContactUsModal(props: IContactUsModal) {
  const { opened, onClose } = props;

  return (
    <Modal
        opened={opened}
        onClose={() => onClose()}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>
  )
}

export default ContactUsModal