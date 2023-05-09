


// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (user) {
            Users.findByIdAndDelete(req.params.id);
            res.json(user);
        }
        else {
            res.status(404).json({message: "User not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}


export {getUsers, getUserById, createUser, updateUser, deleteUser};