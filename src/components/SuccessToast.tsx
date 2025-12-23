// src/components/SuccessToast.tsx

const SuccessToast = (props: {
  toastIsOpen: boolean
  setToastIsOpen: (isOpen: boolean) => void
}) => {
  if (!props.toastIsOpen) return null

  return (
    <div
      className="position-fixed bottom-0 end-0 m-4 p-3 bg-success text-white rounded shadow"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{ zIndex: 1080, minWidth: '20rem' }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <span>Produto adicionado ao carrinho.</span>
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Fechar"
          onClick={() => props.setToastIsOpen(false)}
        />
      </div>
    </div>
  )
}

export default SuccessToast
