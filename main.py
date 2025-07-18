import os

def rename_all(root_dir, old_name, new_name):
    # Duyệt theo chiều sâu từ dưới lên (bottom-up) để đổi tên folder an toàn
    for current_path, dirs, files in os.walk(root_dir, topdown=False):
        # Đổi tên file
        for file in files:
            if old_name in file:
                old_file_path = os.path.join(current_path, file)
                new_file_name = file.replace(old_name, new_name)
                new_file_path = os.path.join(current_path, new_file_name)
                os.rename(old_file_path, new_file_path)
                print(f"Renamed file: {old_file_path} -> {new_file_path}")

        # Đổi tên folder
        for dir in dirs:
            if old_name in dir:
                old_dir_path = os.path.join(current_path, dir)
                new_dir_name = dir.replace(old_name, new_name)
                new_dir_path = os.path.join(current_path, new_dir_name)
                os.rename(old_dir_path, new_dir_path)
                print(f"Renamed folder: {old_dir_path} -> {new_dir_path}")

# 🏁 Gọi hàm:
root_directory = "./"  # hoặc đường dẫn tuyệt đối
rename_all(root_directory, "amica", "MIYORA")
