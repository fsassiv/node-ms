import { service } from "./../server/service";

const PORT = 3000;

service.listen(PORT, () => console.log(`Service running on PORT ${PORT}`));
