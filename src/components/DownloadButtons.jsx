
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';

function DownloadButtons() {
    return (
        <div className="download-buttons">
            <Link to={"/App"}>
                <button className='download-links' type='button'>Download for iOS <AppleIcon /></button>
            </Link>
            
            <Link to={"/App"}>  <button className='download-links' type='button'>  Download for Android <ShopIcon /></button></Link>
                
            
        </div>

    );
}
export default DownloadButtons;