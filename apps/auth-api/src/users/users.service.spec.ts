import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { User } from '../../../../common/entity/user.model';

describe('UsersService', () => {
  let usersService: UsersService;

  const mockUserModel = {
    findAll: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllUsers', () => {
    it('should return all users', async () => {
      const mockUsers: any[] = [
        { id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
        { id: '2', firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' },
      ];

      mockUserModel.findAll.mockResolvedValue(mockUsers);

      const result = await usersService.getAllUsers();

      expect(result).toEqual(mockUsers);
      expect(mockUserModel.findAll).toHaveBeenCalled();
    });

    it('should return an error if no users are found', async () => {
      mockUserModel.findAll.mockResolvedValue([]);

      const result = await usersService.getAllUsers();

      expect(result).toEqual([]);
      expect(mockUserModel.findAll).toHaveBeenCalled();
    });

    it('should return an error if an exception occurs', async () => {
      const mockError = new Error('Test error');
      mockUserModel.findAll.mockRejectedValue(mockError);

      const result = await usersService.getAllUsers();

      expect(result).toEqual(mockError);
      expect(mockUserModel.findAll).toHaveBeenCalled();
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const mockCreateUserDto: Partial<User> = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      };

      const mockCreatedUser: any = {
        id: '1',
        ...mockCreateUserDto,
      };

      mockUserModel.create.mockResolvedValue(mockCreatedUser);

      const result = await usersService.createUser(mockCreateUserDto);

      expect(result).toEqual(mockCreatedUser);
      expect(mockUserModel.create).toHaveBeenCalledWith(mockCreateUserDto);
    });

    it('should return an error if creating a user fails', async () => {
      const mockCreateUserDto: Partial<User> = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      };

      const mockError = new Error('Test error');
      mockUserModel.create.mockRejectedValue(mockError);

      const result = await usersService.createUser(mockCreateUserDto);

      expect(result).toEqual({ message: 'Error creating user', statusCode: 500, error: mockError });
      expect(mockUserModel.create).toHaveBeenCalledWith(mockCreateUserDto);
    });
  });
});
