// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

error NOT_ENOUGH_NICHE(uint points);
error NOT_ENOUGH_FUNDS(uint funds);
error ACCOUNT_CREATION_FAILED(string message);
error UPDATE_ACCOUNT_FAILED();

contract HACX_1 is ERC20, ERC20Burnable, ERC20Pausable, Ownable, ERC20Permit {
    constructor()
        ERC20("MEDIA", "FR")
        Ownable(msg.sender)
        ERC20Permit("MEDIA")
    {
        _mint(msg.sender, 500 * 10 ** decimals());
    }

    enum ACCOUNT_TYPE {
        GENERAL,
        INFLUENCER,
        BRAND
    }

    struct ACCOUNT {
        string username;
        string email;
        ACCOUNT_TYPE account_type;
        uint followerscount;
        uint followingcount;
        uint niche_points;
        string[] posts;
        string[] content_type_liked;
    }

    struct POST {
        address creator;
        string title;
        string description;
        uint likecount;
        bool blacklisted;
        uint comment_count;
        string[] content_type;
    }

    mapping(address => ACCOUNT) public accounts;
    address[] public account_array;
    mapping(string => POST) public posts; // CID => POST
    mapping(string => mapping(address => bool)) public likedBy;
    mapping(string => mapping(address => string[])) public comments;
    mapping(address => mapping(address => bool)) public following; // user => following other user

    //basics
    function createAccount(
        string memory _username,
        string memory _email,
        uint8 _type
    ) public returns (bool) {
        if (bytes(accounts[msg.sender].username).length == 0) {
            if (_type == 0) {
                accounts[msg.sender] = ACCOUNT(
                    _username,
                    _email,
                    ACCOUNT_TYPE.GENERAL,
                    0,
                    0,
                    0,
                    new string[](0),
                    new string[](0)
                );
            } else if (_type == 2) {
                accounts[msg.sender] = ACCOUNT(
                    _username,
                    _email,
                    ACCOUNT_TYPE.BRAND,
                    0,
                    0,
                    0,
                    new string[](0),
                    new string[](0)
                );
            } else {
                revert ACCOUNT_CREATION_FAILED(
                    "Invalid type of account is being created"
                );
            }
            account_array.push(msg.sender);
            return true;
        } else {
            return false;
        }
    }

    function login() public view returns (ACCOUNT memory) {
        return accounts[msg.sender];
    }

    // automated, monetize
    function createPost(
        string memory _CID,
        string[] calldata _type,
        string memory _title,
        string memory _desc
    ) public {
        accounts[msg.sender].posts.push(_CID);
        posts[_CID] = POST(msg.sender, _title, _desc, 0, false, 0, _type);
    }

    function createComment(string memory _comment, string memory _CID) public {
        posts[_CID].comment_count++;
        comments[_CID][msg.sender].push(_comment);
    }

    function blackListPost(string memory _CID) public {
        posts[_CID].blacklisted = !posts[_CID].blacklisted;
    }

    function toggleFollow(address _user) public returns (bool) {
        if (!following[msg.sender][_user]) {
            accounts[_user].followerscount++;
            accounts[msg.sender].followingcount++;
        } else {
            accounts[_user].followerscount--;
            accounts[msg.sender].followingcount--;
        }
        following[msg.sender][_user] = !following[msg.sender][_user];
        return following[msg.sender][_user];
    }

    function update_niche(uint amt) public {
        accounts[msg.sender].niche_points += amt;
    }

    function update_account_type() public {
        if (
            accounts[msg.sender].account_type == ACCOUNT_TYPE.GENERAL &&
            accounts[msg.sender].followerscount > 3
        ) {
            accounts[msg.sender].account_type = ACCOUNT_TYPE.INFLUENCER;
        } else {
            revert UPDATE_ACCOUNT_FAILED();
        }
    }

    function convert_niche() public returns (uint) {
        if (accounts[msg.sender].niche_points < 10) {
            revert NOT_ENOUGH_NICHE(accounts[msg.sender].niche_points);
        } else {
            uint val = accounts[msg.sender].niche_points / 10;
            accounts[msg.sender].niche_points =
                accounts[msg.sender].niche_points %
                10;
            transfer(msg.sender, val * 10 ** decimals());
            return accounts[msg.sender].niche_points;
        }
    }

    function toggleLike(string memory _CID) public returns (bool liked) {
        if (!likedBy[_CID][msg.sender]) {
            posts[_CID].likecount++;
        } else {
            posts[_CID].likecount--;
        }
        likedBy[_CID][msg.sender] = !likedBy[_CID][msg.sender];
        return likedBy[_CID][msg.sender];
    }

    //community
    function donate(address _creator, uint amt) public {
        if (balanceOf(msg.sender) < amt * 10 ** decimals()) {
            revert NOT_ENOUGH_FUNDS(balanceOf(msg.sender));
        } else {
            _transfer(
                msg.sender,
                _creator,
                (amt * 80 * 10 ** decimals()) / 100
            );
        }
    }

    //brand
    //  issueMembers(erc721)

    //store
    //  takeOwnerShip(CID) => sets new creator

    //getters
    function getAllPosts(address _creator) public view returns (POST[] memory) {
        ACCOUNT memory acc = accounts[_creator];
        uint postCount = acc.posts.length;
        POST[] memory user_posts = new POST[](postCount);
        for (uint i = 0; i < postCount; i++) {
            string memory cid = acc.posts[i];
            user_posts[i] = posts[cid];
        }
        return user_posts;
    }

    function getAllCIDS(
        address _creator
    ) public view returns (string[] memory) {
        return accounts[_creator].posts;
    }

    // openzeppelin
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }
    //transfer(to, amt);
    //trasnferFrom(from, to, amt); dont use this
}
