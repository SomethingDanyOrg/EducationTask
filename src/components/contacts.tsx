import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import '../styles/contacts.css';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem'}} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    textAlign: 'center',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            <div className="contacts__title">
                Контакты:
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.286867348747!2d73.3670834!3d54.9856042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafe1cf406c93d%3A0x71b95abfaaf53727!2z0KHQv9Cw0YDRgtCw0LrQvtCy0YHQutCw0Y8g0YPQuy4sIDMsINCe0LzRgdC6LCDQntC80YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA2NDQwMzc!5e0!3m2!1sru!2sde!4v1700315249897!5m2!1sru!2sde"
                    width="600" height="450"  loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Председатель оргкомитета Международного фестиваля «Китеж Градъ»</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ярох Наталья Ивановна

                        председатель правления Омского регионального отделения ОО «Союз дизайнеров России»

                        тел. 8 913 978 0455

                        e-mail: westa-omsk@mail.ru
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Заместитель Председателя оргкомитета Международного фестиваля «Китеж Градъ»</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Козлова Лариса Николаевна

                        доцент кафедры ДРЖ Института дизайна и технологий ОмГТУ,

                        член правления Омского регионального отделения «Союз дизайнеров России»

                        тел. 8 913 616 8244

                        e-mail: kitezhgradomsk@mail.ru
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Член оргкомитета Международного фестиваля «Китеж Градъ», координатор выставочных проектов</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Лунченко Марина Сергеевна

                        старший преподаватель кафедры ДРЖ ИДиТ ОмГТУ, член Союза дизайнеров России

                        тел. 8 960 998 1112

                        e-mail: kitezhgradomsk@mail.ru
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}