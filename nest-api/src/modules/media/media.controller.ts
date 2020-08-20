import { Controller, Post, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from './services/media.service';
import { JwtAuthGuard } from 'src/guards/rest-auth.guard';
import { CurrentUserRest } from 'src/decorators/common.decorator';
import { MulterFile } from './media.interface';
import { CommandBus } from '@nestjs/cqrs';
import { ImageResizeCommand } from './commands/image-resize.command';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService, private commandBus: CommandBus) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (_req, file, callback) => {
        if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
    }),
  )
  uploadFile(@UploadedFile() file: MulterFile, @CurrentUserRest('id') id: string) {
    console.log(1212, file);
    this.commandBus.execute(new ImageResizeCommand(file.destination, file.filename)).finally(() => {
      //
    });
    // return true;
    return this.mediaService.addMedia(
      {
        name: file.originalname,
        mimeType: file.mimetype,
        filePath: file.path,
        fileSize: file.size,
        ownerId: id,
      },
      // parentId,
    );
  }
}
