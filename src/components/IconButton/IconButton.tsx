type IconButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
};

const IconButton = ({ icon, onClick }: IconButtonProps) => (
  <div onClick={onClick} className="icon-button">
    {icon}
  </div>
);

/*
Uso no Header:
<IconButton icon={<FaFilePdf />} onClick={handlePdfClick} />*/

export default IconButton;