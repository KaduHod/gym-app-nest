import { Module } from "@nestjs/common";
import { databaseProviders } from "./typeorm.providers";

@Module({
    imports:[],
    providers:[...databaseProviders],
    exports:[...databaseProviders]
})
export default class TypeOrmModule {}