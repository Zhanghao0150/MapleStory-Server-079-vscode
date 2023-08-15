import os

def search_files_with_content(folder_path, file_extension, search_content):
    result = []

    # 遍历文件夹下的所有内容
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith(file_extension):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        file_content = f.read()
                        if search_content in file_content:
                            result.append(file_path)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

    return result

# 调用示例
folder_path = '.'  # 当前文件夹路径
file_extension = '.js'  # 指定的文件后缀
search_content = 'importPackage'  # 要搜索的内容
result = search_files_with_content(folder_path, file_extension, search_content)

specified_content = "load('nashorn:mozilla_compat.js');"

# Iterate through the list of file paths
for file_path in result:
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Modify the content
        modified_content = specified_content + '\n' + content

        # Write the modified content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(modified_content)
        
        print(f"Modified {file_path} successfully.")

    except Exception as e:
        print(f"An error occurred while processing {file_path}: {e}")
