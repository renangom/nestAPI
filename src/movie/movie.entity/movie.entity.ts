import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger/dist';

@Entity('Movie')
export class Movie {
  @ApiProperty({
    description: 'Id of the movie',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Title of the movie',
    example: 'Iron Man',
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Year the movie was released',
    example: 2008,
  })
  @Column()
  year: number;
}
