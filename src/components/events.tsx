import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactMarkdown from "react-markdown";
import '../styles/events.css';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function Events(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    let downloadHref = 'https://5b3d607f-b045-40aa-bdfc-0d4bdabe8234.filesusr.com/ugd/fe90a5_912bd112ce4c4df4b685898e55cd5415.docx?dn=%D0%97%D0%90%D0%AF%D0%92%D0%9A%D0%90_%D0%98%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA.docx';

    return (
        <section>
            <div className="events__title">
                <ReactMarkdown>События:</ReactMarkdown>
            </div>
            <Box sx={{ width: '100%', textAlign: 'center'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' , display: 'flex', justifyContent: ' center'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="ВОДОВОРОТ ИДЕЙ" {...a11yProps(0)} />
                        <Tab label="ИСТОЧНИК" {...a11yProps(1)} />
                        <Tab label="ТЕЧЕНИЕ" {...a11yProps(2)} />
                        <Tab label="ГОРОД+ ВОДА" {...a11yProps(3)} />
                        <Tab label="ГОРОД ЗАВТРА"  {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <Events value={value} index={0}>
                    Международный конкурс дизайн-проектов среди профессионалов<br/>
                    <a href={downloadHref}>Скачать бланк</a>
                </Events>
                <Events value={value} index={1}>
                    Международный студенческий конкурс дизайнерских идей (интернет-конкурс)<br/>
                    <a href={downloadHref}>Скачать бланк</a>
                </Events>
                <Events value={value} index={2}>
                    Международный конкурс дизайна костюма<br/>
                    <a href={downloadHref}>Скачать бланк</a>
                </Events>
                <Events value={value} index={3}>
                    Фотоконкурс<br/>
                    <a href={downloadHref}>Скачать бланк</a>
                </Events>
                <Events value={value} index={4}>
                    Ежегодный интеллектуальный студенческий экспресс-конкурс<br/>
                    <a href={downloadHref}>Скачать бланк</a>
                </Events>
            </Box>
        </section>
    );
}
