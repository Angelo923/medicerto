import { FaFileExcel, FaFilePdf, FaUserDoctor } from 'react-icons/fa6';
import { PiPrinterFill } from 'react-icons/pi';

const Header = () => {
  const handlePdfClick = () => {
    console.log("PDF clicado!");
    // Adicione sua lógica aqui (exportar PDF)
  };

  const handleExcelClick = () => {
    console.log("Excel clicado!");
    // Adicione sua lógica aqui (exportar Excel)
  };

  const handlePrintClick = () => {
    window.print()
  };

  return (
    <header className="cabecalho">
      <div className="cabecalho__esquerda">
        <h1>Medicerto <FaUserDoctor /></h1>
      </div>
      <div className="cabecalho__direita">
        <div onClick={handlePdfClick}><FaFilePdf /></div>
        <div onClick={handleExcelClick}><FaFileExcel /></div>
        <div onClick={handlePrintClick}><PiPrinterFill /></div>
      </div>
    </header>
  );
};

export default Header;