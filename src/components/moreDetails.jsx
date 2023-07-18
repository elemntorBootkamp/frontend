import { useDispatch } from 'react-redux';
import { Button } from './button';
import { useNavigate } from 'react-router';
import { set_current_websie } from '../redux/dataActions';
import dayjs from 'dayjs';
import './moreDetails.css';

export const MoreDetails = ({ website }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(set_current_websie(website));

    return <>
        <div id="divDetails">
            <img src={website.websiteLogo} style={{ width: '50px' }}></img>
            <h3 className="center">{website.title}</h3>
            <h4 className="center">{website.description}</h4>
            <label>
                This site belongs to {website.owner}.{ }
                This site was built on {dayjs(website.createdAt).format('MM/DD/YYYY')}
                { } and last updated on {dayjs(website.updatedAt).format('MM/DD/YYYY')}.
                The site requires a processor {website.cpu}.
                { } and size memory {website.memory}. The site status{' ' + website.status + '. '}
                {
                    website.domain.length > 0 &&
                    <>
                        You can access the website at: www.
                        {website.domain.map((domain) => <label key={domain}> {domain} </label>)}
                    </>
                }
            </label>
        </div>
        <div id="buttonMoreDetails">
            <Button label='edit details' onClick={() => {
                navigate('../editoradd/edit');
            }}></Button>
        </div>
    </>;
};
