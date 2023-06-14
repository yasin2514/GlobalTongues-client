import { Helmet } from "react-helmet";
const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>Global Tongues | {title}</title>
        </Helmet>

    );
};

export default PageTitle;