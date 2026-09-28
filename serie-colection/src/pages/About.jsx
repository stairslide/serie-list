import { Box, Card, Typography } from '@mui/material';

const About = () => {

    return (
        <Box marginTop={16}> 
            <Card sx={{ alignItems: 'center', mb: 0, pl: 10,backgroundColor:"#f3eded", height:300 }}>
            <Typography variant="h3" sx={{ mt: 10}}> Sobre </Typography>
            <Typography variant="h4" sx={{ mt: 4}}>Informações sobre o projeto </Typography>
            <Typography variant="body1">Este é um projeto de gerenciamento de séries assistidas desenvolvido com React para a disciplina de Desenvolvimento de Sistemas Frontend. Aqui você pode cadastrar, visualizar, editar e excluir séries assistidas</Typography>
            </Card>
        </Box>
    )
}

export default About;